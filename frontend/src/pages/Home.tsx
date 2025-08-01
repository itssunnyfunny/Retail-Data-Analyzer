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
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Retail Data Analyzer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
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

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Package className="mr-2" size={20} />
            <span>Manage Products</span>
          </button>
          <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <BarChart3 className="mr-2" size={20} />
            <span>View Analytics</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home 