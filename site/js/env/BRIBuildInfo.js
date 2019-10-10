'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-10 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-492';
    this._commitGIT = '037fba02805abf9d195db1b8132bd53de97b82b5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}