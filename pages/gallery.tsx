import { GetStaticProps } from 'next';
import { SlideshowLightbox } from 'lightbox.js-react';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import HeaderWithBubbles from '../components/HeaderWithBubbles/HeaderWithBubbles';
import Modal from '../components/Modal/Modal';
import { PageHeader } from '../components/PageHeader/PageHeader';
import useWindowDimensions from '../hooks/useWindowDimensions';
import BgDesktop from '../public/assets/headers/BgGalleryDesktop.jpg';
import BgMobile from '../public/assets/headers/bgGalleryMobile.jpg';
import { getLocalImages, EventData, ImageData } from '../lib/gallery';

interface GalleryProps {
  gallery: EventData[];
}

const sanitizeIdentifier = (identifier: string) => {
  return identifier.replace(/[^a-zA-Z0-9-_]/g, '');
};

const Gallery = ({ gallery }: GalleryProps) => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const executeScroll = () => {
    if (ref?.current?.offsetTop !== undefined) {
      window.scroll({
        top:
          ref.current.offsetTop -
          (width && width > 1280 ? 0 : width && (width < 768 ? 60 : 100))!,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="See our"
        titleSpan="School Gallery"
        paragraph="See photos from the most important events in our school."
        buttonTitle="See photos"
        onClick={executeScroll}
      />
      <main
        ref={ref}
        className="px-5 pb-[50px] md:px-8 md:mt-8 xl:px-[110px] xl:pb-[100px] 2xl:px-[180px]"
      >
        <HeaderWithBubbles header="School Gallery" />
        {!selectedEvent && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-12 xl:mt-0">
          {gallery.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer relative rounded-lg overflow-hidden transition duration-300 transform hover:scale-105"
            >
              <Image
                src={event.images[0].src}
                alt={event.eventName}
                width={300}
                height={200}
                layout="responsive"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-end px-4 pb-4 bg-black/50">
                <p className="text-white font-semibold">{event.eventName}</p>
              </div>
            </div>
          ))}
        </div>
        
        )}

        {width < 1280 && selectedEvent && (
          <div className="w-full mt-4 md:mt-8">
            <div className="border-y-[1px] border-[#F0F0F0] py-3 px-1 flex justify-between items-center">
              <div
                onClick={handleClose}
                className="w-[40px] h-[40px] rounded-[10px] bg-[#FAFAFA] flex justify-center items-center p-3"
              >
                Close
              </div>
              <p className="text-[#579CE2] font-bold text-end md:text-[20px]">
                {selectedEvent.eventName}
              </p>
            </div>
            {selectedEvent.images.length > 0 && (
              <SlideshowLightbox
                lightboxIdentifier={'lightbox' + sanitizeIdentifier(selectedEvent.eventName)}
                framework="next"
                images={selectedEvent.images}
              >
                <div className="flex flex-wrap justify-between my-4 ">
                  {selectedEvent.images.map((image, index) => (
                    <div
                      key={image.alt}
                      className="w-[48%] h-[145px] rounded-[15px] overflow-hidden mb-2 md:h-[200px] md:mb-6"
                    >
                      <Image
                        width={500}
                        height={300}
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                        src={image.src}
                        alt={image.alt}
                        data-lightboxjs={'lightbox' + sanitizeIdentifier(selectedEvent.eventName)}
                      />
                    </div>
                  ))}
                </div>
              </SlideshowLightbox>
            )}
          </div>
        )}

        {width >= 1280 && (
          <Modal show={!!selectedEvent} onClose={handleClose}>
            {selectedEvent && (
              <div className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center items-center">
                <div className="w-4/5 p-8 bg-white rounded-[15px]">
                  <div className="flex justify-between items-center border-y-[1px] border-[#F0F0F0] py-2">
                    <div
                      onClick={handleClose}
                      className="w-[40px] h-[40px] rounded-[10px] bg-[#FAFAFA] flex justify-center items-center p-3 hover:cursor-pointer"
                    >
                      Close
                    </div>
                    <p className="text-[#579CE2] font-bold text-end md:text-[20px]">
                      {selectedEvent.eventName}
                    </p>
                  </div>
                  <div className="flex">
                    {selectedEvent.images.length > 0 && (
                      <SlideshowLightbox
                        lightboxIdentifier={'lightbox' + sanitizeIdentifier(selectedEvent.eventName)}
                        framework="next"
                        images={selectedEvent.images}
                      >
                        <div className="flex flex-wrap my-4 max-h-[500px] overflow-y-scroll">
                          {selectedEvent.images.map((image, index) => (
                            <div
                              key={image.alt}
                              className="w-[20%] overflow-hidden h-[200px] md:mb-3 px-2 "
                            >
                              <Image
                                width={600}
                                height={400}
                                style={{
                                  objectFit: 'cover',
                                  width: '100%',
                                  height: '100%',
                                }}
                                src={image.src}
                                alt={image.alt}
                                className="rounded-[15px]"
                                data-lightboxjs={'lightbox' + sanitizeIdentifier(selectedEvent.eventName)}
                              />
                            </div>
                          ))}
                        </div>
                      </SlideshowLightbox>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Modal>
        )}
      </main>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gallery = getLocalImages();
  return {
    props: {
      gallery,
    },
  };
};

export default Gallery;
