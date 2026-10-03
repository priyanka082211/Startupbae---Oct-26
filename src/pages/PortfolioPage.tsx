import React, { useState } from 'react';

const categories = [
  'All',
  'Branding & Logos',
  'Websites & Landing Pages',
  'Social Media & Ads',
  '2D & 3D Animation',
  'Motion Graphics & Videos',
  'Pitch Decks & Presentations',
  'Brochures & Marketing Materials',
  'UI/UX Design',
];

const portfolioItems = [
  {
    title: 'Brand Identity',
    category: 'Branding & Logos',
    year: '2026',
    images: [
      '/portfolio/branding-01.jpg',
      '/portfolio/branding-02.jpg',
      '/portfolio/branding-03.jpg',
    ],
  },
  {
    title: 'Website Design',
    category: 'Websites & Landing Pages',
    year: '2026',
    images: [
      '/portfolio/website-01.jpg',
      '/portfolio/website-02.jpg',
      '/portfolio/website-03.jpg',
    ],
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media & Ads',
    year: '2026',
    images: [
      '/portfolio/social-01.jpg',
      '/portfolio/social-02.jpg',
      '/portfolio/social-03.jpg',
    ],
  },
  {
    title: '2D & 3D Animation',
    category: '2D & 3D Animation',
    year: '2026',
    images: [
      '/portfolio/animation-01.jpg',
      '/portfolio/animation-02.jpg',
      '/portfolio/animation-03.jpg',
    ],
  },
  {
    title: 'Motion Graphics',
    category: 'Motion Graphics & Videos',
    year: '2026',
    images: [
      '/portfolio/motion-01.jpg',
      '/portfolio/motion-02.jpg',
      '/portfolio/motion-03.jpg',
    ],
  },
  {
    title: 'Pitch Deck',
    category: 'Pitch Decks & Presentations',
    year: '2026',
    images: [
      '/portfolio/deck-01.jpg',
      '/portfolio/deck-02.jpg',
      '/portfolio/deck-03.jpg',
    ],
  },
  {
    title: 'Marketing Brochure',
    category: 'Brochures & Marketing Materials',
    year: '2026',
    images: [
      '/portfolio/brochure-01.jpg',
      '/portfolio/brochure-02.jpg',
      '/portfolio/brochure-03.jpg',
    ],
  },
  {
    title: 'UI/UX Design',
    category: 'UI/UX Design',
    year: '2026',
    images: [
      '/portfolio/uiux-01.jpg',
      '/portfolio/uiux-02.jpg',
      '/portfolio/uiux-03.jpg',
    ],
  },
];

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  const selectedProject =
    selectedProjectIndex !== null
      ? filteredItems[selectedProjectIndex]
      : null;

  const openProject = (index: number) => {
    setSelectedProjectIndex(index);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
    setSelectedImageIndex(0);
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setSelectedImageIndex((current) =>
      current === 0
        ? selectedProject.images.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setSelectedImageIndex((current) =>
      current === selectedProject.images.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <main
      style={{
        background: '#faf8f5',
        color: '#25252a',
        minHeight: '100vh',
        padding: '40px 32px 80px',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p
            style={{
              fontSize: '13px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#77757a',
              marginBottom: '12px',
            }}
          >
            StartupBae
          </p>

          <h1
            style={{
              fontSize: '42px',
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Our Work
          </h1>

          <p
            style={{
              maxWidth: '650px',
              color: '#77757a',
              fontSize: '16px',
              lineHeight: 1.7,
              marginTop: '16px',
            }}
          >
            A selection of branding, websites, marketing creatives,
            presentations, videos and digital experiences created for
            businesses and brands.
          </p>
        </div>

        {/* Categories */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            borderBottom: '1px solid #dcd8d2',
            paddingBottom: '18px',
            marginBottom: '42px',
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
                fontSize: '14px',
                color:
                  activeCategory === category
                    ? '#25252a'
                    : '#77757a',
                fontWeight:
                  activeCategory === category ? 600 : 400,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px 32px',
          }}
        >
          {filteredItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              onClick={() => openProject(index)}
              style={{
                cursor: 'pointer',
              }}
            >
              {/* Cover Image */}
              <div
                style={{
                  aspectRatio: '4 / 3',
                  overflow: 'hidden',
                  background: '#ebe7e1',
                  marginBottom: '16px',
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  fontSize: '14px',
                  color: '#77757a',
                  marginTop: '6px',
                }}
              >
                {item.category} · {item.year}
              </p>

              <p
                style={{
                  fontSize: '13px',
                  color: '#999',
                  marginTop: '5px',
                }}
              >
                {item.images.length} images
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(20,20,20,0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
          }}
        >
          {/* Close */}
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '25px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '32px',
              cursor: 'pointer',
              zIndex: 2,
            }}
          >
            ×
          </button>

          {/* Previous Image */}
          {selectedProject.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '48px',
                cursor: 'pointer',
                zIndex: 2,
              }}
            >
              ‹
            </button>
          )}

          {/* Main Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1000px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <img
              src={selectedProject.images[selectedImageIndex]}
              alt={selectedProject.title}
              style={{
                maxWidth: '100%',
                maxHeight: '72vh',
                objectFit: 'contain',
              }}
            />

            <h2
              style={{
                color: 'white',
                fontSize: '20px',
                fontWeight: 500,
                marginTop: '20px',
              }}
            >
              {selectedProject.title}
            </h2>

            <p
              style={{
                color: '#bbb',
                fontSize: '14px',
                marginTop: '6px',
              }}
            >
              {selectedProject.category} · {selectedProject.year}
            </p>

            <p
              style={{
                color: '#999',
                fontSize: '13px',
                marginTop: '8px',
              }}
            >
              Image {selectedImageIndex + 1} of{' '}
              {selectedProject.images.length}
            </p>
          </div>

          {/* Next Image */}
          {selectedProject.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '48px',
                cursor: 'pointer',
                zIndex: 2,
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </main>
  );
};
