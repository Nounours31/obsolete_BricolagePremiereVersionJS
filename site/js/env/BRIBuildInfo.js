'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-02 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2169';
    this._commitGIT = '8bd00b09394f9b270a77453f7ce864e679d43ef3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}