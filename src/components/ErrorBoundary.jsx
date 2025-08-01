import React from 'react';
import { Alert, Button, Container } from 'react-bootstrap';

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
    // Log error details
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container className="py-5">
          <Alert variant="danger" className="text-center">
            <Alert.Heading>
              <span className="me-2">😔</span>
              Oops! Something went wrong
            </Alert.Heading>
            <p>
              We're sorry, but something unexpected happened. 
              Please try refreshing the page or contact support if the problem persists.
            </p>
            <hr />
            <div className="d-flex justify-content-center gap-3">
              <Button 
                variant="outline-danger" 
                onClick={this.handleReload}
              >
                🔄 Refresh Page
              </Button>
              <Button 
                variant="outline-primary" 
                onClick={() => window.location.href = '/'}
              >
                🏠 Go Home
              </Button>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-start">
                <summary>Error Details (Development Only)</summary>
                <pre className="mt-2 p-3 bg-light rounded small">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </Alert>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;