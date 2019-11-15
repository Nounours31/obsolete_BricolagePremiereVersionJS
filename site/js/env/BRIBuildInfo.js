'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-15 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-638';
    this._commitGIT = 'ea30611fc20244fc277f6e4d80c2308c04d5c3e6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}