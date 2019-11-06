'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-06 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-599';
    this._commitGIT = '1245feade33879ae49db27fbcd03bedca48000d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}