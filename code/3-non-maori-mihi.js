// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert('Non-Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  let name = prompt('What is your name?')

  let mountain = prompt('whats a mountain you associate with?')

  let water = prompt('whats some water you associate with?')

  let hometown = prompt('whats your hometown')

  alert('Your mihi:')
  alert('Tēnā koutou,')
  alert('Kei te mihi au ki a ' + mountain + ',')
  alert('Kei te mihi au ki a ' + water + ',')
  alert('Ko te Tiriti o Waitangi te waka,')
  alert('Ko Aotearoa te iwi,')
  alert('Nō ' + hometown + ' au,')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}