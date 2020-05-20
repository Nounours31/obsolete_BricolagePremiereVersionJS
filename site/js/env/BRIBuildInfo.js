'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-20 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1385';
    this._commitGIT = 'afcc405c6409ec455305a2bb28292f0c151b4e72';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}