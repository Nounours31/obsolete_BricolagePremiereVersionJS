'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-26 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-436';
    this._commitGIT = 'b03277af8657ef5b349764e58b36329a3eecd1b5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}