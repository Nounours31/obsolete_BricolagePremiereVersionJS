'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-14 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1359';
    this._commitGIT = 'bd69fe8b8dbc86cdda230d3528ac3ef1bd5caca3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}