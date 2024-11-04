export const handleApiError = (error) => {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      switch (error.response.status) {
        case 401:
          return 'No autorizado. Por favor, inicie sesión nuevamente.';
        case 403:
          return 'No tiene permisos para realizar esta acción.';
        case 404:
          return 'Recurso no encontrado.';
        case 500:
          return 'Error del servidor. Por favor, intente más tarde.';
        default:
          return error.response.data.message || 'Ocurrió un error inesperado.';
      }
    } else if (error.request) {
      // La solicitud se realizó pero no se recibió respuesta
      return 'No se pudo conectar con el servidor.';
    } else {
      // Algo sucedió en la configuración de la solicitud
      return 'Error al procesar la solicitud.';
    }
  };