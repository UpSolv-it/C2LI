interface ProblemTest {
  input: string;
  output?: string;
}

type ProblemTests = ProblemTest[];

type ProblemId = string;

type ContestTests = Record<ProblemId, ProblemTests>;

interface ExecutionCommand {
  command: string;
  args: string[];
}

interface ExecutionResult extends ProblemTest {
  executionOutput: string;
  timedOut: boolean;
  runtimeError: boolean;
  executionTime: number;
}

declare const enum TesterSuffix {
  CPP = 'cpp',
  PY = 'py'
}

interface Tester {
  child: import('child_process').ChildProcess | null;
  suffix: TesterSuffix;
  path?: string;
  bin: string;
  beforeAll: () => void;
  execute: (id: string, x: ProblemTest) => ExecutionResult;
  afterAll: () => void;
  spawn: () => void;
}
