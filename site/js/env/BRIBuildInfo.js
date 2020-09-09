'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-09 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1831';
    this._commitGIT = '85bb67749836972eacae45be30533e414a34f798';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}