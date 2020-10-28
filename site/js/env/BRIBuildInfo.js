'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-28 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-2030';
    this._commitGIT = '14dcf3160827465086709d60102367be755a088e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}