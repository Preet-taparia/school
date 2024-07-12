const Map = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '56.25%', margin: "30px 0px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.2056559579846!2d75.72017027375958!3d26.96038595804327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db2d70042d00d%3A0x2bb93250ef625788!2sThe%20Shining%20Star%20School!5e0!3m2!1sen!2sin!4v1716452690297!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: '0', left: '0', border: '0' }}
        loading="lazy"
        title="Google Map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
