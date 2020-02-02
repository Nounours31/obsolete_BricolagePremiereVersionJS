'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-02 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-951';
    this._commitGIT = '08477c18a9dc9b9b404a741c023bad97eecb65e1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}