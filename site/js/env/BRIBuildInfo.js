'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-02 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-462';
    this._commitGIT = '4364cb705bf6b4e64d66fc498db7e378c2518fd0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}