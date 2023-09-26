function validatePostData(req, res, next) {
    if (req.method === "POST") {
      const { body } = req;
  
      
      if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ error: "Cuerpo de solicitud POST vacío" });
      }
  
      
      if (!isValidTaskData(body)) {
        return res.status(400).json({ error: "Datos de tarea no válidos" });
      }
    }
  
    if (req.method === "PUT") {
      const { body } = req;
  
      
      if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ error: "Cuerpo de solicitud PUT vacío" });
      }
  
      
      if (!isValidTaskData(body)) {
        return res.status(400).json({ error: "Datos de tarea no válidos" });
      }
    }
  
    next();
  }
  
  function isValidTaskData(data) {
    // Implementa tus propias validaciones aquí
    // Por ejemplo, verifica que tenga los atributos necesarios
    return data.title && data.description;
  }
  
  module.exports = {
    validatePostData
  };
  