"use client";

import React from "react";

// Define an interface for the component's props.
// Assuming the fallback is a ReactNode to be rendered when an error occurs.
interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

// Define an interface for the component's state.
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  // Initialize state with type annotation.
  state: ErrorBoundaryState = { hasError: false };

  // getDerivedStateFromError doesn't need explicit type annotation for the return type,
  // TypeScript infers it from the ErrorBoundaryState interface.
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Log the error to an error reporting service
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log the error and info to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
