Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Relações externas","publishDate":"19/08/2024 13:22:32","pages":[{"id":"8a33e151-2165-4f33-b782-aebe336d1915","name":"Produzir Evento Webinar","version":"2.0","author":"CRASP - Desenvolvimento","image":"files\\diagrams\\Produzir Evento Webinar.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"81f0ef7c-1825-4cc6-8b6a-436309f93bb0","name":"TRANSMITIR EVENTO WEBINAR","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":127.0}],"radius":0.0,"height":700.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"52d60434-cb39-486d-ac54-5e90f83b7843","name":"Gateway exclusivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":670.0,"y":633.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","elementSubType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Aprovar artes","elementType":"SequenceFlow","properties":[{"id":"ConditionType","name":"Tipo de Condição","value":"Padrão","type":"text"}]}]},{"id":"dffc3e1e-fece-41d6-9081-5fdb46ccd284","name":"Gateway exclusivo","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":800.0,"y":383.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","elementSubType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Aprovou","elementType":"SequenceFlow","properties":[{"id":"ConditionType","name":"Tipo de Condição","value":"Padrão","type":"text"}]},{"name":"Não aprovou","elementType":"SequenceFlow","properties":[]}]},{"id":"84de3f3c-7618-447a-aa0f-cd16c9b01d23","name":"Analisar informações","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":175.75,"y":271.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"50b3abe2-b388-43e8-8e4d-9f57f2b8bdc3","name":"Elaborar página","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":385.25,"y":271.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"dc62431a-e25b-47f4-8321-4ef99e979650","name":"Aprovar artes","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":774.5,"y":271.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"c814c3d3-5ac4-46d5-9a2a-4cc587616903","name":"Realizar Webinar","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1034.0,"y":271.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]}]}],"subPages":[{"id":"84de3f3c-7618-447a-aa0f-cd16c9b01d23","name":"Analisar informações","image":"files\\diagrams\\Analisar informacoes.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"8a33e151-2165-4f33-b782-aebe336d1915"},{"id":"50b3abe2-b388-43e8-8e4d-9f57f2b8bdc3","name":"Elaborar página","image":"files\\diagrams\\Elaborar pagina.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"8a33e151-2165-4f33-b782-aebe336d1915"},{"id":"dc62431a-e25b-47f4-8321-4ef99e979650","name":"Aprovar artes","image":"files\\diagrams\\Aprovar artes.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"8a33e151-2165-4f33-b782-aebe336d1915"},{"id":"c814c3d3-5ac4-46d5-9a2a-4cc587616903","name":"Realizar Webinar","image":"files\\diagrams\\Realizar Webinar.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"8a33e151-2165-4f33-b782-aebe336d1915"}]},{"id":"f81258bb-2988-4218-9850-4e717ffaa6aa","name":"Relatório Pós Evento Webinar","version":"2.0","author":"CRASP - Desenvolvimento","image":"files\\diagrams\\Relatorio Pos Evento Webinar.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"f807365a-9b48-4d5f-a50a-520217b2798f","name":"RELATAR PÓS EVENTO WEBINAR","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":127.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"f516b77b-36ca-4c5f-94b1-d52555762e9c","name":"Inserir informações","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":646.0,"y":273.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"5d1c2586-2c5b-4343-b61e-3677f304b7dd","name":"Enviar de dados","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":786.0,"y":273.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]}]}],"subPages":[{"id":"f516b77b-36ca-4c5f-94b1-d52555762e9c","name":"Inserir informações","image":"files\\diagrams\\Inserir informacoes.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"f81258bb-2988-4218-9850-4e717ffaa6aa"},{"id":"5d1c2586-2c5b-4343-b61e-3677f304b7dd","name":"Enviar de dados","image":"files\\diagrams\\Enviar de dados.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"f81258bb-2988-4218-9850-4e717ffaa6aa"}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"searchMap":[{"containerId":"8a33e151-2165-4f33-b782-aebe336d1915","containerName":"Produzir Evento Webinar","isSubprocess":false,"elements":[{"id":"2cbdaf26-05ae-4488-adb9-3db0d3c56d21","value":"GRUPO DE EXCELÊNCIA "},{"id":"81f0ef7c-1825-4cc6-8b6a-436309f93bb0","value":"TRANSMITIR EVENTO WEBINAR"},{"id":"c3a3a5f1-b7c0-4ac2-a259-5f2d079b8179","value":"RELAÇÕES EXTERNAS / COORDENADOR "},{"id":"9c336c3a-4247-4ca0-bcf9-7875b4f48b65","value":"MARKETING / COORDENADOR"},{"id":"032f1d81-60ae-472b-8b6b-d305c4a2ba19","value":"Solicitar imagem e voz"},{"id":"ad59f517-1587-4544-9ed5-adb24656cbaa","value":"Publicar evento no site CRA-SP"},{"id":"b521ff58-037d-47a9-805f-5e896e5a4d77","value":"Divulgar evento no WhatsApp "},{"id":"9a332358-927e-4ebb-8c7f-04f99fcadddb","value":""},{"id":"f2ddda97-1470-40e5-b05d-763d6e21a026","value":"Evento\nreprovado"},{"id":"967e5cb7-5c52-4778-9748-944fbdf6f581","value":"Webinar\nrealizado"},{"id":"aa30bcae-9386-4035-adb2-318da4da9666","value":"Demanda\nrecebida"},{"id":"84de3f3c-7618-447a-aa0f-cd16c9b01d23","value":"Analisar informações"},{"id":"50b3abe2-b388-43e8-8e4d-9f57f2b8bdc3","value":"Elaborar página"},{"id":"dc62431a-e25b-47f4-8321-4ef99e979650","value":"Aprovar artes"},{"id":"c814c3d3-5ac4-46d5-9a2a-4cc587616903","value":"Realizar Webinar"},{"id":"f8b1bd74-7d82-4722-9326-a63d361fd62a","value":"Produzir artes"},{"id":"dffc3e1e-fece-41d6-9081-5fdb46ccd284","value":""},{"id":"52d60434-cb39-486d-ac54-5e90f83b7843","value":""},{"id":"630cd2b4-952f-4723-9955-3669597bd6a0","value":"Fazer ajustes"}]},{"containerId":"f81258bb-2988-4218-9850-4e717ffaa6aa","containerName":"Relatório Pós Evento Webinar","isSubprocess":false,"elements":[{"id":"f807365a-9b48-4d5f-a50a-520217b2798f","value":"RELATAR PÓS EVENTO WEBINAR"},{"id":"6fb27bad-3a40-403a-990d-1452662ccc9b","value":"RELAÇÕES EXTERNAS / COORDENADOR"},{"id":"df8cc008-fc79-4e9c-b20e-fb298526914e","value":"Relatório do YouTube"},{"id":"2459e01e-18d7-468d-b144-6c13f563aa4e","value":"Relato pós\nevento iniciado"},{"id":"59ba3526-6e24-413a-ac1c-3f668af02a64","value":"Fechar pedido de certificados "},{"id":"640aef68-7b0d-4afc-a375-19668a757df5","value":"Enviar minuta com relatório"},{"id":"c38e6bdf-2c10-47fe-8793-3cfcd80815b3","value":"Emitir certificados"},{"id":"fd8afe62-8ef0-4b2e-a7fd-ea1d8dd63571","value":"Relato\nconcluído "},{"id":"f516b77b-36ca-4c5f-94b1-d52555762e9c","value":"Inserir informações"},{"id":"5d1c2586-2c5b-4343-b61e-3677f304b7dd","value":"Enviar de dados"},{"id":"b35a255a-cae0-4162-830e-ac63ba18a816"},{"id":"9b204e99-f54b-4456-9af8-3418a887c485","value":"GRUPO DE EXCELÊNCIA"}]}]}