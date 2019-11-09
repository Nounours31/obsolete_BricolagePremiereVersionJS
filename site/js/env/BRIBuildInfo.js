'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-09 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-611';
    this._commitGIT = '923938e2935a10c75ffe73fdd72950b362f8ddcf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}