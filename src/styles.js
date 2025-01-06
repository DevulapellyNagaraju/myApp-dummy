const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      color: '#007bff',
      marginBottom: '20px',
      fontSize: '48px',
      fontWeight: '500',
      fontFamily: 'times',
      '@media (max-width: 768px)': {
        fontSize: '36px',
      },
      '@media (max-width: 480px)': {
        fontSize: '24px',
      },
    },
    titleIcon: {
      height: '1em', 
      width: 'auto', 
      verticalAlign: 'middle', 
      '@media (max-width: 480px)': {
        display: 'none', // Hide the image on mobile devices
      },
    },
    form: {
      marginBottom: '20px',
    },
    inputGroup: {
      marginBottom: '10px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      padding: '8px',
      width: '100%',
      maxWidth: '300px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    map: {
      height: '500px',
      width: '100%',
    },
    errorText: {
      color: 'red',
      fontSize: '12px',
    },
  };
  
  export default styles;