'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-12 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1722';
    this._commitGIT = '63c083ee29598a7732d5cda826ae97c6a2a67898';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}