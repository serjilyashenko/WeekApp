import { Component, PropsWithChildren } from 'react';

type PropsType = PropsWithChildren<{
  fallback: (error: Error) => JSX.Element;
}>;

type StateType = {
  error: Error | null;
};

export class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: unknown): StateType {
    if (error instanceof Error) {
      return { error };
    }
    return { error: new Error('Unknown Error: ' + error) };
  }

  render() {
    if (this.state.error) {
      return this.props.fallback(this.state.error);
    }

    return this.props.children;
  }
}
