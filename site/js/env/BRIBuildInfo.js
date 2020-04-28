'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-28 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1297';
    this._commitGIT = '61602b77a5a5b76fcb6dc9f66ea3a4c44a78bbc4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}