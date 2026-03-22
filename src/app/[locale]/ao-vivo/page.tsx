export default function AoVivo() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
        Ao Vivo
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
        Acompanhe nossos cultos em tempo real.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">▶</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Nenhuma transmissao ao vivo no momento</p>
              <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">Domingo 10h, 18h30 e Quinta 20h</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="aspect-[9/16] rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Stories ao vivo</p>
              <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">Nenhum story no momento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}