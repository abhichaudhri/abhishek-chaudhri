export default function TerminalHeader() {
    return (
        <div
            className="
      flex
      items-center
      gap-2
      border-b
      border-zinc-800
      px-5
      py-4
      "
        >
            <div className="h-3 w-3 rounded-full bg-red-500" />

            <div className="h-3 w-3 rounded-full bg-yellow-500" />

            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm text-zinc-500">
                terminal
            </span>
        </div>
    );
}