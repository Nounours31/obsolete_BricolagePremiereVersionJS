'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-24 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1894';
    this._commitGIT = '935cfb2d710eddfa10916b16d6eb0e7aa18a95d0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}