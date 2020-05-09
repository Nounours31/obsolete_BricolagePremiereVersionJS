'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-09 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1340';
    this._commitGIT = '48c54c882d366bade208265dd8c2e9b0486dc6d0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}