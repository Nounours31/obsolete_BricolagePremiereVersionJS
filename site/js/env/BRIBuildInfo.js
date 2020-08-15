'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-15 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1733';
    this._commitGIT = 'b4a342582072318427773d0c73002995908bf9bb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}