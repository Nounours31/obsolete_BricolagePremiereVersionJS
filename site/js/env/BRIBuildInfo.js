'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-24 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-918';
    this._commitGIT = '906377082dc735d814c77e1334ebbeadfd7a3e09';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}