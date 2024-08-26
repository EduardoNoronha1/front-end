import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: '',
    pergunta5: '',
    pergunta6: '',
    pergunta7: '',
    pergunta8: ''
  });

  const [feedback, setFeedback] = useState({
    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: '',
    pergunta5: '',
    pergunta6: '',
    pergunta7: '',
    pergunta8: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newFeedback = {};

    const answers = {
      pergunta1: 'falso', 
      pergunta2: 'falso',    
      pergunta3: 'verdadeiro', 
      pergunta4: 'falso',    
      pergunta5: 'RGB',
      pergunta6: 'HTML não estiliza',
      pergunta7: 'Verdadeiro',
      pergunta8: 'Sim'
    };

    for (const question in answers) {
      if (formData[question] === answers[question]) {
        newFeedback[question] = 'correct';
      } else {
        newFeedback[question] = 'incorrect';
      }
    }

    setFeedback(newFeedback);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="form-title">Formulário</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="dados-pessoal">
          <legend>Respostas para o formulário:</legend>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              id="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="matricula">
            Matrícula:
            <input
              type="text"
              placeholder="Matrícula"
              name="matricula"
              id="matricula"
              value={formData.matricula}
              onChange={handleChange}
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Questões</legend>

          <label>
            HTML é uma linguagem de programação?
            <div className="options">
              <label className={formData.pergunta1 === 'verdadeiro' ? feedback.pergunta1 : ''}>
                <input
                  type="radio"
                  name="pergunta1"
                  value="verdadeiro"
                  checked={formData.pergunta1 === 'verdadeiro'}
                  onChange={handleChange}
                  required
                />
                Verdadeiro
              </label>
              <label className={formData.pergunta1 === 'falso' ? feedback.pergunta1 : ''}>
                <input
                  type="radio"
                  name="pergunta1"
                  value="falso"
                  checked={formData.pergunta1 === 'falso'}
                  onChange={handleChange}
                />
                Falso
              </label>
            </div>
          </label>

          <label>
            CSS é usado para lógica de programação?
            <div className="options">
              <label className={formData.pergunta2 === 'verdadeiro' ? feedback.pergunta2 : ''}>
                <input
                  type="radio"
                  name="pergunta2"
                  value="verdadeiro"
                  checked={formData.pergunta2 === 'verdadeiro'}
                  onChange={handleChange}
                  required
                />
                Verdadeiro
              </label>
              <label className={formData.pergunta2 === 'falso' ? feedback.pergunta2 : ''}>
                <input
                  type="radio"
                  name="pergunta2"
                  value="falso"
                  checked={formData.pergunta2 === 'falso'}
                  onChange={handleChange}
                />
                Falso
              </label>
            </div>
          </label>

          <label>
            JavaScript é uma linguagem de programação?
            <div className="options">
              <label className={formData.pergunta3 === 'verdadeiro' ? feedback.pergunta3 : ''}>
                <input
                  type="radio"
                  name="pergunta3"
                  value="verdadeiro"
                  checked={formData.pergunta3 === 'verdadeiro'}
                  onChange={handleChange}
                  required
                />
                Verdadeiro
              </label>
              <label className={formData.pergunta3 === 'falso' ? feedback.pergunta3 : ''}>
                <input
                  type="radio"
                  name="pergunta3"
                  value="falso"
                  checked={formData.pergunta3 === 'falso'}
                  onChange={handleChange}
                />
                Falso
              </label>
            </div>
          </label>

          <label>
            React é uma linguagem de programação?
            <div className="options">
              <label className={formData.pergunta4 === 'verdadeiro' ? feedback.pergunta4 : ''}>
                <input
                  type="radio"
                  name="pergunta4"
                  value="verdadeiro"
                  checked={formData.pergunta4 === 'verdadeiro'}
                  onChange={handleChange}
                  required
                />
                Verdadeiro
              </label>
              <label className={formData.pergunta4 === 'falso' ? feedback.pergunta4 : ''}>
                <input
                  type="radio"
                  name="pergunta4"
                  value="falso"
                  checked={formData.pergunta4 === 'falso'}
                  onChange={handleChange}
                />
                Falso
              </label>
            </div>
          </label>

          <label>
            O que é RGB?
            <input
              type="text"
              id="Pergunta5"
              name="pergunta5"
              value={formData.pergunta5}
              onChange={handleChange}
              placeholder="Resposta"
            />
          </label>

          <label>
            O HTML pode ser usado para estilizar páginas?
            <div className="options">
              <label className={formData.pergunta6 === 'HTML não estiliza' ? feedback.pergunta6 : ''}>
                <input
                  type="radio"
                  name="pergunta6"
                  value="HTML não estiliza"
                  checked={formData.pergunta6 === 'HTML não estiliza'}
                  onChange={handleChange}
                  required
                />
                HTML não estiliza
              </label>
              <label className={formData.pergunta6 === 'CSS estiliza' ? feedback.pergunta6 : ''}>
                <input
                  type="radio"
                  name="pergunta6"
                  value="CSS estiliza"
                  checked={formData.pergunta6 === 'CSS estiliza'}
                  onChange={handleChange}
                />
                JavaScript estiliza 
              </label>
              <label className={formData.pergunta6 === 'Ambos estilizam' ? feedback.pergunta6 : ''}>
                <input
                  type="radio"
                  name="pergunta6"
                  value="Ambos estilizam"
                  checked={formData.pergunta6 === 'Ambos estilizam'}
                  onChange={handleChange}
                />
                Ambos estilizam
              </label>
              <label className={formData.pergunta6 === 'Nenhum estiliza' ? feedback.pergunta6 : ''}>
                <input
                  type="radio"
                  name="pergunta6"
                  value="Nenhum estiliza"
                  checked={formData.pergunta6 === 'Nenhum estiliza'}
                  onChange={handleChange}
                />
                Nenhum estiliza
              </label>
              <label className={formData.pergunta6 === 'Não tenho certeza' ? feedback.pergunta6 : ''}>
                <input
                  type="radio"
                  name="pergunta6"
                  value="Não tenho certeza"
                  checked={formData.pergunta6 === 'Não tenho certeza'}
                  onChange={handleChange}
                />
                Depende do sistema
              </label>
            </div>
          </label>

          <label>
            JavaScript pode manipular o DOM de uma página web?
            <div className="options">
              <label className={formData.pergunta7 === 'Verdadeiro' ? feedback.pergunta7 : ''}>
                <input
                  type="radio"
                  name="pergunta7"
                  value="Verdadeiro"
                  checked={formData.pergunta7 === 'Verdadeiro'}
                  onChange={handleChange}
                  required
                />
                Verdadeiro
              </label>
              <label className={formData.pergunta7 === 'Falso' ? feedback.pergunta7 : ''}>
                <input
                  type="radio"
                  name="pergunta7"
                  value="Falso"
                  checked={formData.pergunta7 === 'Falso'}
                  onChange={handleChange}
                />
                Falso
              </label>
              <label className={formData.pergunta7 === 'Só em HTML' ? feedback.pergunta7 : ''}>
                <input
                  type="radio"
                  name="pergunta7"
                  value="Só em HTML"
                  checked={formData.pergunta7 === 'Só em HTML'}
                  onChange={handleChange}
                />
                Só em HTML
              </label>
              <label className={formData.pergunta7 === 'Só em CSS' ? feedback.pergunta7 : ''}>
                <input
                  type="radio"
                  name="pergunta7"
                  value="Só em CSS"
                  checked={formData.pergunta7 === 'Só em CSS'}
                  onChange={handleChange}
                />
                Só em CSS
              </label>
              <label className={formData.pergunta7 === 'Só em PHP' ? feedback.pergunta7 : ''}>
                <input
                  type="radio"
                  name="pergunta7"
                  value="Só em PHP"
                  checked={formData.pergunta7 === 'Só em PHP'}
                  onChange={handleChange}
                />
                Só em PHP
              </label>
            </div>
          </label>

          <label>
            O CSS pode alterar a cor de fundo de um elemento?
            <div className="options">
              <label className={formData.pergunta8 === 'Sim' ? feedback.pergunta8 : ''}>
                <input
                  type="radio"
                  name="pergunta8"
                  value="Sim"
                  checked={formData.pergunta8 === 'Sim'}
                  onChange={handleChange}
                  required
                />
                Sim
              </label>
              <label className={formData.pergunta8 === 'Não' ? feedback.pergunta8 : ''}>
                <input
                  type="radio"
                  name="pergunta8"
                  value="Não"
                  checked={formData.pergunta8 === 'Não'}
                  onChange={handleChange}
                />
                Não
              </label>
              <label className={formData.pergunta8 === 'Só em JavaScript' ? feedback.pergunta8 : ''}>
                <input
                  type="radio"
                  name="pergunta8"
                  value="Só em JavaScript"
                  checked={formData.pergunta8 === 'Só em JavaScript'}
                  onChange={handleChange}
                />
                Só em JavaScript
              </label>
              <label className={formData.pergunta8 === 'Só em HTML' ? feedback.pergunta8 : ''}>
                <input
                  type="radio"
                  name="pergunta8"
                  value="Só em HTML"
                  checked={formData.pergunta8 === 'Só em HTML'}
                  onChange={handleChange}
                />
                Só em HTML
              </label>
              <label className={formData.pergunta8 === 'Só em PHP' ? feedback.pergunta8 : ''}>
                <input
                  type="radio"
                  name="pergunta8"
                  value="Só em PHP"
                  checked={formData.pergunta8 === 'Só em PHP'}
                  onChange={handleChange}
                />
                Só em PHP
              </label>
            </div>
          </label>
          
          <button type="submit" className="submit-button">Enviar</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
