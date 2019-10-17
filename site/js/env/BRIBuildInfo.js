'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-17 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-522';
    this._commitGIT = 'c99af6ecb9fca45de0108b3839950ef0fa26b4b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}