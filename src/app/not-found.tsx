import React from 'react';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
    return (
        <div className="flex flex-row justify-center items-center bg-gray-100" style={{ height: "100vh", width: "100vw" }}>
            <Card className="flex flex-col justify-center shadow-lg rounded-lg" style={{ height: "30vh", width: "30vw", backgroundColor: "#fff" }}>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl font-semibold text-gray-800">Page Introuvable</CardTitle>
                    <CardDescription className="text-gray-600">Impossible de trouver la ressource demandée</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                    <p className="text-gray-600">La page que vous recherchez n&#39existe pas.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/" passHref>
                        <a className="text-blue-600 hover:underline">Retour à l&#39accueil</a>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
