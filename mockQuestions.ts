const mockQuestions = [
	{
		enunciation: 'Qual é a máscara padrão para uma rede Classe C?',
		options: ['255.255.255.255', '255.0.0.0', '255.255.255.0', '255.255.0.0'],
		answer: 2,
	},
	{
		enunciation: 'O que significa o termo "CIDR" em redes?',
		options: [
			'Classful Internet Data Routing',
			'Centralized Internet Data Routing',
			'Classless Internal Device Routing',
			'Classless Inter-Domain Routing',
		],
		answer: 3,
	},
	{
		enunciation:
			'Qual protocolo é usado para traduzir nomes de domínio em endereços IP?',
		options: ['DNS', 'FTP', 'ARP', 'HTTP'],
		answer: 0,
	},
	{
		enunciation: 'Qual porta padrão é usada pelo protocolo HTTP?',
		options: ['443', '22', '80', '53'],
		answer: 2,
	},
	{
		enunciation: 'Qual camada do modelo OSI é responsável pelo roteamento?',
		options: ['Sessão', 'Transporte', 'Rede', 'Física'],
		answer: 2,
	},
	{
		enunciation: 'Qual o endereço IPv4 reservado para loopback?',
		options: ['255.255.255.255', '127.0.0.1', '0.0.0.0', '192.168.0.1'],
		answer: 1,
	},
	{
		enunciation:
			'Qual protocolo é usado para resolver endereços IP para endereços MAC?',
		options: ['RARP', 'NAT', 'ICMP', 'ARP'],
		answer: 3,
	},
	{
		enunciation: 'Qual o propósito do protocolo BGP?',
		options: [
			'Prover DHCP automático',
			'Monitorar dispositivos de rede',
			'Troca de informações de roteamento entre AS',
			'Gerenciar VLANs',
		],
		answer: 2,
	},
	{
		enunciation: 'Qual porta padrão é usada pelo protocolo HTTPS?',
		options: ['22', '443', '21', '80'],
		answer: 1,
	},
	{
		enunciation: 'O que significa NAT em redes?',
		options: [
			'Network Administration Tool',
			'Node Access Transfer',
			'None of the above',
			'Network Address Translation',
		],
		answer: 3,
	},
	{
		enunciation: 'Qual endereço IPv4 é usado para broadcast?',
		options: ['192.168.1.255', '0.0.0.0', '255.255.255.255', '127.0.0.1'],
		answer: 2,
	},
	{
		enunciation: 'O que significa MTU?',
		options: [
			'Media Transfer Unit',
			'Maximum Transfer Unit',
			'Minimum Transmission Unit',
			'Maximum Transmission Unit',
		],
		answer: 3,
	},
	{
		enunciation: 'Qual protocolo é usado para envio de emails?',
		options: ['HTTP', 'IMAP', 'SMTP', 'POP3'],
		answer: 2,
	},
	{
		enunciation: 'Qual a função do protocolo ICMP?',
		options: [
			'Prover roteamento',
			'Gerenciar conexões TCP',
			'Resolver nomes de domínio',
			'Envio de mensagens de erro e controle',
		],
		answer: 3,
	},
	{
		enunciation: 'Quantos bits tem um endereço IPv6?',
		options: ['64', '32', '256', '128'],
		answer: 3,
	},
	{
		enunciation: 'Qual é o formato correto de um endereço IPv6?',
		options: ['10.0.0.0', '127.0.0.1', '192.168.1.1', '::1'],
		answer: 3,
	},
	{
		enunciation: 'O que é o protocolo RIP?',
		options: [
			'Um protocolo de gerenciamento de VLANs',
			'Uma ferramenta de diagnóstico',
			'Um protocolo de roteamento dinâmico',
			'Um tipo de firewall',
		],
		answer: 2,
	},
	{
		enunciation: 'Qual a principal diferença entre TCP e UDP?',
		options: [
			'TCP é mais rápido que UDP',
			'TCP é orientado a conexão e UDP não',
			'UDP é orientado a conexão e TCP não',
			'Nenhuma das anteriores',
		],
		answer: 1,
	},
	{
		enunciation: 'O que é um Autonomous System (AS)?',
		options: [
			'Um endereço IP único',
			'Uma sub-rede privada',
			'Um conjunto de roteadores sob um único controle administrativo',
			'Um protocolo de roteamento dinâmico',
		],
		answer: 2,
	},
	{
		enunciation: 'Qual é o prefixo de endereços IPv6 multicast?',
		options: ['FE80::/10', '::1', 'FF00::/8', 'FC00::/7'],
		answer: 2,
	},
	{
		enunciation:
			'Qual comando é usado para verificar a tabela de roteamento no Linux?',
		options: ['ping', 'ifconfig', 'traceroute', 'netstat -r'],
		answer: 3,
	},
	{
		enunciation: 'Qual protocolo é usado para sincronizar o tempo em redes?',
		options: ['DNS', 'FTP', 'SNMP', 'NTP'],
		answer: 3,
	},
	{
		enunciation: 'O que é VLAN?',
		options: [
			'Virtual Local Area Network',
			'Visual LAN',
			'Virtual Logical Area Network',
			'Variable LAN',
		],
		answer: 0,
	},
	{
		enunciation: 'Qual é a porta padrão usada pelo protocolo SSH?',
		options: ['80', '443', '22', '23'],
		answer: 2,
	},
	{
		enunciation:
			'Quantos hosts podem ser endereçados em uma rede com máscara /24?',
		options: ['256', '254', '512', '1024'],
		answer: 1,
	},
	{
		enunciation:
			'Qual é o protocolo responsável por garantir confiabilidade em conexões?',
		options: ['TCP', 'ICMP', 'UDP', 'IP'],
		answer: 0,
	},
	{
		enunciation:
			'Qual camada do modelo OSI lida com o encapsulamento de dados em quadros?',
		options: ['Rede', 'Física', 'Enlace', 'Aplicação'],
		answer: 2,
	},
	{
		enunciation: 'Qual o endereço IPv6 reservado para localhost?',
		options: ['::1', 'FE80::1', '::/128', '::'],
		answer: 0,
	},
	{
		enunciation:
			'Qual ferramenta é usada para rastrear o caminho que um pacote percorre até o destino?',
		options: ['traceroute', 'netstat', 'ping', 'telnet'],
		answer: 0,
	},
	{
		enunciation: 'O que é a RFC 1918?',
		options: [
			'Um protocolo de roteamento dinâmico',
			'Um padrão de endereçamento privado',
			'Um tipo de criptografia',
			'Uma ferramenta de firewall',
		],
		answer: 1,
	},
	{
		enunciation: 'Qual porta padrão é usada pelo protocolo Telnet?',
		options: ['23', '21', '25', '22'],
		answer: 0,
	},
	{
		enunciation: 'Qual protocolo é usado para gerenciar dispositivos de rede?',
		options: ['NTP', 'SNMP', 'ICMP', 'SMTP'],
		answer: 1,
	},
	{
		enunciation:
			'Qual é o número padrão de bits em uma máscara de sub-rede /16?',
		options: ['32', '8', '16', '24'],
		answer: 2,
	},
	{
		enunciation:
			'Qual é o intervalo de portas conhecido como "portas bem conhecidas"?',
		options: ['49152-65535', '1024-49151', '0-65535', '0-1023'],
		answer: 3,
	},
	{
		enunciation: 'O que significa TTL em redes?',
		options: [
			'Transmission Type Line',
			'Total Transfer Limit',
			'Time to Live',
			'Transfer to Local',
		],
		answer: 2,
	},
	{
		enunciation: 'O que é um gateway padrão?',
		options: [
			'O endereço do servidor DNS',
			'O roteador que conecta a rede à Internet',
			'O endereço do servidor DHCP',
			'O endereço de broadcast',
		],
		answer: 1,
	},
	{
		enunciation:
			'Qual comando exibe o endereço IP de um dispositivo no Windows?',
		options: ['ping', 'ip addr', 'ifconfig', 'ipconfig'],
		answer: 3,
	},
	{
		enunciation:
			'Qual tipo de NAT permite múltiplos dispositivos compartilharem um único endereço IP público?',
		options: [
			'Dynamic NAT',
			'Double NAT',
			'Static NAT',
			'PAT (NAT sobrecarga)',
		],
		answer: 3,
	},
	{
		enunciation:
			'Qual é o protocolo padrão para acessar páginas web de forma segura?',
		options: ['SSL', 'HTTP', 'HTTPS', 'FTP'],
		answer: 2,
	},
	{
		enunciation: 'O que significa o prefixo 192.168.0.0/16?',
		options: [
			'Um endereço público',
			'Um endereço privado',
			'Um endereço de broadcast',
			'Um endereço de multicast',
		],
		answer: 1,
	},
	{
		enunciation: 'Qual é o principal objetivo do DHCP?',
		options: [
			'Gerenciar endereços IP',
			'Gerenciamento de VLANs',
			'Roteamento dinâmico',
			'Sincronização de tempo',
		],
		answer: 0,
	},
	{
		enunciation:
			'Qual é o nome do protocolo usado para transferir arquivos de forma não segura?',
		options: ['HTTP', 'SFTP', 'FTP', 'TFTP'],
		answer: 2,
	},
	{
		enunciation: 'O que significa o código de resposta HTTP 404?',
		options: [
			'Recurso não encontrado',
			'Erro interno do servidor',
			'Requisição bem-sucedida',
			'Não autorizado',
		],
		answer: 0,
	},
	{
		enunciation: 'O que diferencia IPv4 de IPv6?',
		options: [
			'Tamanho dos endereços',
			'Uso de NAT',
			'Protocolo de transporte',
			'Suporte a multicast',
		],
		answer: 0,
	},
	{
		enunciation:
			'Qual protocolo usa mensagens "Hello" para estabelecer adjacências entre roteadores?',
		options: ['RIP', 'EIGRP', 'BGP', 'OSPF'],
		answer: 3,
	},
	{
		enunciation:
			'Qual endereço IPv4 é reservado para redes privadas de Classe A?',
		options: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', '127.0.0.0/8'],
		answer: 0,
	},
	{
		enunciation:
			'Qual camada do modelo OSI é responsável por compressão de dados?',
		options: ['Enlace', 'Sessão', 'Aplicação', 'Apresentação'],
		answer: 3,
	},
	{
		enunciation: 'O que significa um endereço IP com máscara /32?',
		options: [
			'Um único host',
			'Um loopback',
			'Uma rede inteira',
			'Um broadcast',
		],
		answer: 0,
	},
	{
		enunciation: 'O que é um pacote fragmentado em IPv4?',
		options: [
			'Um pacote duplicado',
			'Um pacote perdido',
			'Um pacote corrompido',
			'Um pacote dividido em partes menores',
		],
		answer: 3,
	},
	{
		enunciation: 'Qual protocolo permite o roteamento de endereços IPv6?',
		options: ['EIGRPv2', 'RIPv2', 'OSPFv3', 'BGP'],
		answer: 2,
	},
]
