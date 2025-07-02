const lembrete = require('../models/lembrete');

exports.listLembrete = async (req, res) => {
  try {
    const lembretes = await lembrete.findAll({
      where: { userId: req.session.userId },
      order: [['dataHora', 'ASC']]
    });
    res.json(lembretes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar lembretes' });
  }
};

exports.createLembrete = async (req, res) => {
  try {
    const { titulo, descricao, dataHora } = req.body;
    const lembrete = await lembrete.create({
      titulo,
      descricao,
      dataHora,
      userId: req.session.userId
    });
    res.status(201).json(lembrete);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar lembrete' });
  }
};

exports.getLembrete = async (req, res) => {
  try {
    const lembrete = await lembrete.findByPk(req.params.id);
    if (!lembrete || lembrete.userId !== req.session.userId) {
      return res.status(404).json({ error: 'lembrete não encontrado' });
    }
    res.json(lembrete);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar lembrete' });
  }
};

exports.updateLembrete = async (req, res) => {
  try {
    const { titulo, descricao, dataHora } = req.body;
    const lembrete = await lembrete.findByPk(req.params.id);
    if (!lembrete || lembrete.userId !== req.session.userId) {
      return res.status(404).json({ error: 'lembrete não encontrado' });
    }
    lembrete.titulo = titulo;
    lembrete.descricao = descricao;
    lembrete.dataHora = dataHora;
    await lembrete.save();
    res.json(lembrete);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar lembrete' });
  }
};

exports.deleteLembrete = async (req, res) => {
  try {
    const lembrete = await lembrete.findByPk(req.params.id);
    if (!lembrete || lembrete.userId !== req.session.userId) {
      return res.status(404).json({ error: 'lembrete não encontrado' });
    }
    await lembrete.destroy();
    res.json({ message: 'lembrete excluído com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao excluir lembrete' });
  }
};
