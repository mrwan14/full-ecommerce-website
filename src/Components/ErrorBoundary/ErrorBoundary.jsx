import React from "react";

/**
 * ErrorBoundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console or error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div className="text-center p-5">
            <h2 className="text-danger mb-3">Something went wrong</h2>
            <p className="mb-4">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="text-start mb-4">
                <summary>Error Details (Development Only)</summary>
                <pre className="bg-light p-3 mt-2" style={{ fontSize: "12px", overflow: "auto" }}>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            <button className="btn btn-primary" onClick={this.handleReset}>
              Try Again
            </button>
            <button 
              className="btn btn-secondary ms-2" 
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

