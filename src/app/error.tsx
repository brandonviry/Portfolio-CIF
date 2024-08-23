'use client'; // Les composants d'erreur doivent être des composants Client

import { useEffect } from 'react';
import React from 'react';

import { AlertCircle } from 'lucide-react';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('An error occurred:', error.message);
  }, [error]);

  // Message d'erreur générique
  const genericErrorMessage = "Une erreur inattendue s'est produite. Veuillez réessayer.";

  return (
    <div>
      <Alert style={{ width: "90vw", marginLeft: "5vw", marginRight: "5vw", marginTop: "5vw" }} variant="destructive" className="bg-neutral-100">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erreur</AlertTitle>
        <AlertDescription>
          {genericErrorMessage + " "}
          <button
            onClick={() => reset()}
            className="text-blue-600 hover:underline"
          >
            Réessayer
          </button>
        </AlertDescription>
      </Alert>
    </div>
  );
}
