

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400"
                alt="Coding setup"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate software engineer with a strong foundation in full-stack development 
                and a growing expertise in artificial intelligence and machine learning. With over 3 years 
                of experience, I've worked on various projects ranging from web applications to AI-powered solutions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                My journey in tech started with a curiosity about how things work, which led me to explore 
                programming and eventually fall in love with problem-solving. I'm particularly drawn to 
                algorithmic challenges and have solved over 500 problems on LeetCode.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Currently, I'm expanding my knowledge in AI/ML, working on projects that leverage deep learning 
                and natural language processing. I believe in continuous learning and staying updated with the 
                latest technologies and industry trends.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">LeetCode Solved</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">3+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
