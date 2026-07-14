import React from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.location.href = import.meta.env.BASE_URL;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error__wrapper">
          <div className="error__card">
            <div className="error__icon">⚠️</div>
            <h1 className="error__title">Something Went Wrong</h1>
            <p className="error__subtitle">
              An unexpected error occurred. Please try refreshing the page.
            </p>

            {/* Show error details only in development */}
            {import.meta.env.DEV && (
              <details className="error__details">
                <summary className="error__summary">
                  View Error Details (Dev Only)
                </summary>
                <div className="error__stack">
                  <p className="error__message">
                    {this.state.error && this.state.error.toString()}
                  </p>
                  <pre className="error__trace">
                    {this.state.errorInfo &&
                      this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}

            <div className="error__actions">
              <button
                className="error__btn error__btn--primary"
                onClick={this.handleReset}
              >
                Go Back Home
              </button>
              <button
                className="error__btn error__btn--secondary"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
