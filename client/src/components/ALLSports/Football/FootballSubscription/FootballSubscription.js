import React from 'react';

export default function FootballSubscription() {
  return (
    <div>
      <section 
        style={{
          backgroundImage: 'url(https://i.pinimg.com/564x/00/0f/8f/000f8f7a38b4b4293d54da315245178d.jpg)',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
        className="dark:bg-gray-800 px-2 relative overflow-x-hidden top-32"
      >
        <div className="container px-6 py-8 mx-auto ">
          <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {plans.map(plan => (
              <div
                key={plan.title}
                className="px-6 py-4 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg"
              >
                <p className="text-lg font-medium text-white dark:text-gray-100">{plan.title}</p>
                <h4 className="mt-2 text-4xl font-semibold text-white dark:text-gray-100">{plan.price}
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span>
                </h4>
                <p className="mt-4 text-white dark:text-gray-300">{plan.description}</p>

                <div className="mt-8 space-y-8">
                  {plan.features.map(feature => (
                    <div className="flex items-center" key={feature}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="mx-4 text-gray-400 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const plans = [
  {
    title: 'Intro',
    price: '$19',
    description: 'For most businesses that want to optimize web queries.',
    features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users']
  },
  {
    title: 'Popular',
    price: '$99',
    description: 'For most businesses that want to optimize web queries.',
    features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users']
  },
  {
    title: 'Enterprise',
    price: '$199',
    description: 'For most businesses that want to optimize web queries.',
    features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users']
  }
];
