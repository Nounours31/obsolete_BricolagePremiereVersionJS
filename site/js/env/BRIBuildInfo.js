'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-23 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1763';
    this._commitGIT = '67153c7a7b69c7482180e896ef13dadb83e00039';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}