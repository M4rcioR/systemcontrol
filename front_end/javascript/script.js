  // Dados para o gráfico de vendas mensais
  const salesData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vendas',
      data: [1000, 1500, 800, 1200, 2000, 1800],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  // Configurações do gráfico de vendas mensais
  const salesConfig = {
    type: 'bar',
    data: salesData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // Criação do gráfico de vendas mensais
  const salesChartCanvas = document.getElementById('salesChart');
  new Chart(salesChartCanvas, salesConfig);

  // Dados para o gráfico de receitas e despesas
  const incomeExpenseData = {
    labels: ['Receitas', 'Despesas'],
    datasets: [{
      data: [5000, 3000],
      backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
      borderWidth: 1
    }]
  };

  // Configurações do gráfico de receitas e despesas
  const incomeExpenseConfig = {
    type: 'doughnut',
    data: incomeExpenseData
  };

  // Criação do gráfico de receitas e despesas
  const incomeExpenseChartCanvas = document.getElementById('incomeExpenseChart');
  new Chart(incomeExpenseChartCanvas, incomeExpenseConfig);

