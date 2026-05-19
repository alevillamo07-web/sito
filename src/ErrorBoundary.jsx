import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary text-foreground p-6">
          <div className="max-w-md text-center">
            <h1 className="font-serif text-3xl font-bold mb-4">Si è verificato un errore</h1>
            <p className="text-foreground/80 mb-8">
              Ci scusiamo per l'inconveniente. Per favore, ricarica la pagina o riprova più tardi.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-foreground text-primary font-bold uppercase tracking-wider rounded-full hover:bg-accent hover:text-white transition-colors"
            >
              Ricarica Pagina
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
