export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <div className="prose">
        <p className="mb-4">
          私たちは最新のテクノロジーを活用して、革新的なソリューションを提供することを目指しています。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">ミッション</h2>
        <p className="mb-4">
          高品質なサービスを通じて、お客様のビジネスの成長をサポートすることが私たちの使命です。
          持続可能な未来を創造するため、日々新しい技術と向き合っています。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">チーム</h2>
        <p className="mb-4">
          経験豊富なエンジニア、デザイナー、プロダクトマネージャーで構成された
          チームが、お客様のニーズに応じたソリューションを提供します。
        </p>

        <div className="mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            お問い合わせ
          </button>
        </div>
      </div>
    </div>
  )
}