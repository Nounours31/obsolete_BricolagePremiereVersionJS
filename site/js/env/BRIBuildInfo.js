'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-12 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1108';
    this._commitGIT = '9e1d5b71a3857c9a20b926f13616b4b86cf7ba40';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}