$(document).ready(function() {
    var saldo = 0.00;
  
    // função para atualizar o saldo
    function atualizarSaldo() {
      novoSaldo += parseFloat($(this).val());
      $(this).parents('tr').find('.saldo').text(saldo.toFixed(2));
    }
  
    // evento de mudança nos campos de entrada e saída
    $('input[name="entrada"], input[name="saida"]').change(atualizarSaldo);
  
    // evento de clique no botão adicionar
    $('#adicionar').click(function() {
      var data = $('input[name="data"]').val();
      var descricao = $('input[name="descricao"]').val();
      var entrada = parseFloat($('input[name="entrada"]').val());
      var saida = parseFloat($('input[name="saida"]').val());
      var novoSaldo = saldo + entrada - saida;
      saldo = novoSaldo;
  
      // adiciona nova linha à tabela
      var novaLinha = '<tr><td>' + data + '</td><td>' + descricao + '</td><td>' + entrada.toFixed(2) + '</td><td>' + saida.toFixed(2) + '</td><td><span class="saldo">' + novoSaldo.toFixed(2) + '</span></td></tr>';
      $('#tabela tbody').append(novaLinha);
  
      // limpa os campos de entrada
      $('input[name="data"]').val('');
      $('input[name="descricao"]').val('');
      $('input[name="entrada"]').val('0');
      $('input[name="saida"]').val('0');
    });
  });