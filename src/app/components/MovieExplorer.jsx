export default function MovieExplorer() {
    const Cards = [
      { id: 1, title: 'Inception', rating: 5, imageUrl: '' },
      { id: 2, title: 'The Dark Knight', rating: 5, imageUrl: '' },
      { id: 3, title: 'Interstellar', rating: 4, imageUrl: '' },
      { id: 4, title: 'The Matrix', rating: 4, imageUrl: '' },
      { id: 5, title: 'The Godfather', rating: 5, imageUrl: '' },
      { id: 6, title: 'Pulp Fiction', rating: 4, imageUrl: '' },
      { id: 7, title: 'Forrest Gump', rating: 5, imageUrl: '' },
      { id: 8, title: 'Fight Club', rating: 4, imageUrl: '' },
      { id: 9, title: 'Gladiator', rating: 5, imageUrl: '' }
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-3xl font-bold mb-8 text-center">Películas y Series</h1>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Cards.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
              >
                <div className="aspect-[2/3] bg-gradient-to-br from-gray-700 to-gray-600 relative">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
  
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold mb-2">{movie.title}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-4 h-4 rounded-sm ${
                          star <= movie.rating ? 'bg-yellow-400' : 'bg-gray-600'
                        }`}
                      ></div>
                    ))}
                  </div>
  
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-700 rounded w-full"></div>
                    <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  