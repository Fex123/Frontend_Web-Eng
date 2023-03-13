const studyprogramlistTemplate = document.createElement("template");
studyprogramlistTemplate.innerHTML = /* html */ `

<style>
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css');


        .contentwrapper {
          padding-top: 1.5rem;
          width: 100%;
        }
        :root {
          --primary-color: rgb(38,34,98);
          --secondary-color: rgb(201, 32, 139);
          --secondary-hover-color: rgb(206, 147, 216);
          --light-grey: rgb(241,243,243);
          --darker-grey: rgb(212,218,218);
        }
        .btn-primary, .btn-primary:focus {
          color: white;
          background-color: var(--secondary-color);
          border: 1px solid var(--secondary-color);
          font-weight: bolder;
        }
        
        .btn-primary, .btn-primary:focus {
          color: white;
          background-color: var(--secondary-color);
          border: 1px solid var(--secondary-color);
          font-weight: bolder;
      }

    </style>

    
    <div class="contentwrapper d-flex flex-column">
      <div class="bar d-flex justify-content-between mb-3 flex-row">
        <h2 id="contentTitle">Studiengänge</h2>
        <button class="btn btn-primary" type="submit" id="btnTopAction">+ Hinzufügen</button>
      </div>
      <div class="contentCard p-3 bg-body rounded shadow-sm w-100 h-auto" id="contentCard">
       <div class="d-flex text-muted" style="overflow-x: auto;">
        <table class="table table-hover table-responsive">
          <thead id="thead">
            <tr id="theadtr">
            <th>Abkürzung</th><th>Name</th></tr>
          </thead>
          <tbody id="tbody">
    
    
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
`;
