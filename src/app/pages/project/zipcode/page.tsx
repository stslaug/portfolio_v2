"use client";
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// Declare Leaflet types for window object
declare global {
    interface Window {
        L: {
            map: (element: HTMLElement) => LeafletMap;
            tileLayer: (url: string, options: Record<string, unknown>) => LeafletTileLayer;
            marker: (latlng: [number, number]) => LeafletMarker;
            polyline: (latlngs: [number, number][], options: Record<string, unknown>) => LeafletPolyline;
            latLngBounds: (bounds: [number, number][]) => LeafletBounds;
        };
    }
}

// Define basic Leaflet types
interface LeafletMap {
    off: () => void;
    remove: () => void;
    fitBounds: (bounds: LeafletBounds, options?: Record<string, unknown>) => void;
}

interface LeafletTileLayer {
    addTo: (map: LeafletMap) => LeafletTileLayer;
}

interface LeafletMarker {
    addTo: (map: LeafletMap) => LeafletMarker;
    bindPopup: (content: string) => LeafletMarker;
}

interface LeafletPolyline {
    addTo: (map: LeafletMap) => LeafletPolyline;
}

interface LeafletBounds {
    // Leaflet bounds object with basic properties
    [key: string]: unknown;
}

interface Location {
    lat: number;
    lng: number;
    city: string;
    state: string;
    zipcode: string;
}

interface CalculationStep {
    step: string;
    details: {
        formula?: string;
        key: string;
    };
}

interface LocationData {
    zipcode: string;
    city: string;
    state: string;
    lat: string;
    lng: string;
}

interface ApiResponse {
    error?: boolean;
    message?: string;
    from: LocationData;
    to: LocationData;
    distance: string;
    calculationSteps?: CalculationStep[];
}

export default function ZipcodeDistanceFinder() {
    const [zipcode1, setZipcode1] = useState('');
    const [zipcode2, setZipcode2] = useState('');
    const [showSteps, setShowSteps] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Please enter valid US zipcodes');
    const [isCalculating, setIsCalculating] = useState(false);
    const [showCalculationSteps, setShowCalculationSteps] = useState(false);
    const [zipcode1Error, setZipcode1Error] = useState(false);
    const [zipcode2Error, setZipcode2Error] = useState(false);

    const [results, setResults] = useState({
        fromZip: '',
        toZip: '',
        distance: '',
        fromCoord: '',
        toCoord: ''
    });

    const [calculationSteps, setCalculationSteps] = useState<CalculationStep[]>([]);
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
        script.async = true;
        document.head.appendChild(script);

        const link = document.createElement('link');
        link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            if (document.head.contains(script)) document.head.removeChild(script);
            if (document.head.contains(link)) document.head.removeChild(link);
        };
    }, []);

    const isValidZipcode = (zipcode: string) => {
        const valid = /^\d{5}$/.test(zipcode);
        console.log('Validating zipcode:', zipcode, 'Result:', valid);
        return valid;
    };

    const generateStepContent = (step: CalculationStep) => {
        let content: string = '';

        if (step.details.formula) {
            content += "<div key=\"formula\"><strong>Formula:</strong> <i>{step.details.formula}</i></div>";

        }

        Object.entries(step.details).forEach(([key, value]) => {
            if (key !== 'formula') {
                content += "<div key="+key+"><strong>" +key+ ":</strong>" +value +"</div>";
            }
        });

        return content;
    };

    const createMap = (location1: Location, location2: Location) => {
        if (!window.L || !mapRef.current) return;

        if (mapInstanceRef.current) {
            mapInstanceRef.current.off();
            mapInstanceRef.current.remove();
        }

        const map = window.L.map(mapRef.current);
        mapInstanceRef.current = map;

        window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker1 = window.L.marker([location1.lat, location1.lng]).addTo(map);
        marker1.bindPopup(`<b>${location1.city}, ${location1.state}</b><br>Zipcode: ${location1.zipcode}`);

        const marker2 = window.L.marker([location2.lat, location2.lng]).addTo(map);
        marker2.bindPopup(`<b>${location2.city}, ${location2.state}</b><br>Zipcode: ${location2.zipcode}`);

        window.L.polyline([[location1.lat, location1.lng], [location2.lat, location2.lng]], {
            color: 'purple',
            weight: 3,
            opacity: 0.7
        }).addTo(map);

        const bounds = window.L.latLngBounds([[location1.lat, location1.lng], [location2.lat, location2.lng]]);
        map.fitBounds(bounds, {padding: [50, 50]});

        return map;
    };

    const updateMap = (response: ApiResponse) => {
        const location1 = {
            lat: parseFloat(response.from.lat),
            lng: parseFloat(response.from.lng),
            city: response.from.city,
            state: response.from.state,
            zipcode: response.from.zipcode
        };

        const location2 = {
            lat: parseFloat(response.to.lat),
            lng: parseFloat(response.to.lng),
            city: response.to.city,
            state: response.to.state,
            zipcode: response.to.zipcode
        };

        setTimeout(() => {
            createMap(location1, location2);
        }, 100);
    };

    const setZipError = (setError: (error: boolean) => void) => {
        setError(true);
        setTimeout(() => setError(false), 3000);
    };

    const handleCalculate = async () => {
        setShowError(false);
        setZipcode1Error(false);
        setZipcode2Error(false);

        const zip1 = zipcode1.trim();
        const zip2 = zipcode2.trim();

        let hasError = false;

        if (zip1 === zip2) {
            setZipError(setZipcode1Error);
            setZipError(setZipcode2Error);
            setErrorMessage('Please enter two different zipcodes');
            hasError = true;
        }

        if (!isValidZipcode(zip1)) {
            setZipError(setZipcode1Error);
            hasError = true;
        }

        if (!isValidZipcode(zip2)) {
            setZipError(setZipcode2Error);
            hasError = true;
        }

        if (hasError) {
            setShowError(true);
            setShowResults(false);
            setShowCalculationSteps(false);
            return;
        }

        setIsCalculating(true);
        await fetchData(zip1, zip2, showSteps);
    };

    const handleShowStepsChange = (checked: boolean) => {
        setShowSteps(checked);
        if (checked && showResults && calculationSteps.length > 0) {
            setShowCalculationSteps(true);
        } else {
            setShowCalculationSteps(false);
        }
    };

    const fetchData = async (zip1: string, zip2: string, showSteps: boolean) => {
        const apiUrl = window.location.hostname === 'localhost'
            ? 'http://localhost:8000/zipcode.php'
            : './zipcode.php';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    zipcode1: zip1,
                    zipcode2: zip2,
                    showSteps: showSteps ? '1' : '0'
                })
            });

            const data: ApiResponse = await response.json();
            console.log("Response:", data);

            setIsCalculating(false);

            if (data.error) {
                setErrorMessage(data.message || 'An error occurred');
                setShowError(true);
                setShowResults(false);
                setShowCalculationSteps(false);
            } else {
                setResults({
                    fromZip: `${data.from.zipcode} (${data.from.city}, ${data.from.state})`,
                    toZip: `${data.to.zipcode} (${data.to.city}, ${data.to.state})`,
                    distance: data.distance,
                    fromCoord: `[ ${data.from.lng}, ${data.from.lat} ]`,
                    toCoord: `[ ${data.to.lng}, ${data.to.lat} ]`
                });

                setCalculationSteps(data.calculationSteps || []);
                setShowResults(true);

                if (showSteps && data.calculationSteps) {
                    setShowCalculationSteps(true);
                }

                updateMap(data);
            }
        } catch (error) {
            setIsCalculating(false);
            console.log("Fetch Error:", error);
            setErrorMessage('Error connecting to the server. Please try again.');
            setShowError(true);
            setShowResults(false);
            setShowCalculationSteps(false);
        }
    };

    return (
        <div>
            <main className="3xl:max-w-5xl 2xl:max-w-3xl sm:max-w-xl sm:mx-auto mx-10">
                <h1 className="text-center font-bold text-3xl mb-6">Zipcode Distance Finder</h1>

                <div className="mb-6">
                    <h2 className="font-bold text-xl mb-2">About This Tool</h2>
                    <p className="mb-2">This zipcode distance finder calculates the straight-line distance between two US zipcodes. Simply enter both zipcodes and click the calculate button to see the results.</p>
                    <p>Attribution of U.S. Zipcode data: {" "}
                        <Link href="https://simplemaps.com/data/us-zips" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            SimpleMaps.com
                        </Link>
                    </p>
                </div>

                <Separator className="mt-5 mb-5"/>

                <div className="mb-6">
                    <div className="flex items-center space-x-6 mb-5">
                        <div className="w-full">
                            <Label htmlFor="zipcode1">Starting Zipcode</Label>
                            <Input
                                id="zipcode1"
                                type="text"
                                maxLength={5}
                                value={zipcode1}
                                onChange={(e) => setZipcode1(e.target.value.replace(/\D/g, ''))}
                                placeholder="Enter first zipcode"
                                className={zipcode1Error ? 'border-red-500' : ''}
                            />
                        </div>
                        <Separator className="h-8 w-px" orientation="vertical"/>
                        <div className="w-full">
                            <Label htmlFor="zipcode2">Destination Zipcode</Label>
                            <Input
                                id="zipcode2"
                                type="text"
                                maxLength={5}
                                value={zipcode2}
                                onChange={(e) => setZipcode2(e.target.value.replace(/\D/g, ''))}
                                placeholder="Enter second zipcode"
                                className={zipcode2Error ? 'border-red-500' : ''}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <Button
                        onClick={handleCalculate}
                        disabled={isCalculating}
                        className="w-full sm:w-auto"
                    >
                        {isCalculating ? 'Calculating...' : 'Calculate Distance'}
                    </Button>
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="show-steps"
                            checked={showSteps}
                            onCheckedChange={handleShowStepsChange}
                        />
                        <Label htmlFor="show-steps">Show calculation steps</Label>
                    </div>
                </div>

                {showError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        {errorMessage}
                    </div>
                )}

                {showResults && (
                    <div className="mb-6">
                        <h2 className="font-bold text-xl mb-4">Results</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Starting</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Destination</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Distance (miles)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">{results.fromZip}</td>
                                    <td className="border border-gray-300 px-4 py-2">{results.toZip}</td>
                                    <td className="border border-gray-300 px-4 py-2">{results.distance}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{results.fromCoord}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-600">{results.toCoord}</td>
                                    <td className="border border-gray-300 px-4 py-2">-</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {showCalculationSteps && (
                    <div className="mb-6">
                        <h3 className="font-bold text-lg mb-4">Distance Calculation Details</h3>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="mb-4">The distance between these zipcodes is calculated using the Haversine formula, which determines the distance between two points on a sphere. In this case, longitude and latitude on the earth!</p>
                            <div className="space-y-4">
                                {calculationSteps.map((step, index) => (
                                    <div key={index} className="bg-white p-3 rounded border">
                                        <h4 className="font-semibold mb-2">{index + 1}. {step.step}</h4>
                                        <div className="space-y-1 text-sm">
                                            {generateStepContent(step)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div ref={mapRef} style={{height: '500px'}} className="w-full border rounded"></div>
            </main>
        </div>
    );
}