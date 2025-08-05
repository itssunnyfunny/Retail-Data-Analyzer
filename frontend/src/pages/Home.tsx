import { TrendingUp, Users, DollarSign, Package, BarChart3 } from 'lucide-react'

const Home = () => {
  const stats = [
    {
      title: 'Total Sales',
      value: '$45,231',
      change: '+20.1%',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      title: 'Active Products',
      value: '2,350',
      change: '+180.1%',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Revenue Growth',
      value: '+12.5%',
      change: '+19%',
      icon: TrendingUp,
      color: 'text-purple-600',
    },
  ]

  return (
    <div className="space-y-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 min-h-screen py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 drop-shadow-lg">
          Welcome to Retail Data Analyzer
        </h1>
        <p className="text-xl text-purple-700 max-w-2xl mx-auto">
          Comprehensive analytics and insights for your retail business. 
          Monitor sales, track products, and make data-driven decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-200 hover:border-pink-400 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-br from-pink-100 to-blue-100 ${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  {stat.change}
                </span>
                <span className="text-sm text-gray-600 ml-1">from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-200 mt-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-blue-300 rounded-lg hover:bg-blue-50 transition-colors text-blue-700 font-semibold">
            <Package className="mr-2" size={20} />
            <span>Manage Products</span>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-pink-300 rounded-lg hover:bg-pink-50 transition-colors text-pink-700 font-semibold">
            <BarChart3 className="mr-2" size={20} />
            <span>View Analytics</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home 